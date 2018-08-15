import React from 'react';
import basetoblob from 'b64-to-blob';


export class NameGen extends React.Component{
    state = {
        fileUrl: null,
        generatedName: null,
        loading: false,
    }

    handleForm(e){
        e.preventDefault();
        this.setState({ loading: true });
        const name = document.querySelector('.name').value
        fetch('https://vlp2rp5ld3.execute-api.eu-west-1.amazonaws.com/api/?name='+name)
            .then((res) => {
                return res.json()
                
            })
            .then((data) => {
                const blob = basetoblob(data.image,'image/png');
                const blobUrl = URL.createObjectURL(blob);
                
                this.setState({
                    loading: false,
                    generatedName: name,
                    fileUrl: blobUrl,
                });

                console.log(data)
            })
    }

    render(){
        const { fileUrl, generatedName, loading } = this.state;

        return(
            <div>
                <h1>Name Gen</h1>
                <form className="form" onSubmit={this.handleForm.bind(this)}>
                    <input type="text" className="name" placeholder="Person's name" />
                    <input type="submit" value="Generate" />
                </form>
                {loading ? <h2>Loading</h2> : null}
                <a href={fileUrl} download={`${generatedName}.png`} disabled={fileUrl === null}>Download {generatedName}</a>
                <textarea readOnly value={`Congrats ${generatedName}!`}/>
            </div>
        )
    }
}
