import React from 'react';
import mime from 'mime-types';
import {Modal,Input,Button,Icon} from 'semantic-ui-react';


class FileModal extends React.Component{
    state = {
        file:null,
        authorized:['image/jpeg','image/png']
    };

    addFile = event => {
        const file = event.target.files[0];
        //console.log(file);
        if(file){
            this.setState({file});
        }
    }

    clearFile = () => this.setState({file:null});

    sendFile = () => {
        const {file} = this.state;
        const {uploadFile,closeModal} = this.props;
        if(this.isAuthorized(file.name)){
            const metadata = {contentType: mime.lookup(file.name)};
            uploadFile(file,metadata);
            closeModal();
            this.clearFile();
        }
    };

    isAuthorized = filename => this.state.authorized.includes(mime.lookup(filename));



    render(){
        const{modal,closeModal} = this.props;
        return(
            
            <Modal basic open={modal} closeModal={closeModal}>
            <Modal.Header>Select a file to upload</Modal.Header>
            <Modal.Content>
                <Input 
                fluid
                onChange={this.addFile}
                label="File type : jpg,png"
                name="file"
                type="file"
                />
            </Modal.Content>
            <Modal.Actions>
                <Button color="green" inverted onClick={this.sendFile}><Icon name="checkmark"/>Send</Button>
                <Button color="red" inverted onClick={closeModal}><Icon name="remove"/>Cancel</Button>
                
            </Modal.Actions>
            </Modal>

        )
    }
}


export default FileModal;