"use client";

import axios from "axios";
import { useEffect, useState } from "react";

function Upload() {
  const [imageView, setImageView] = useState();
  const [data, setData] = useState([]);
  const [testBlob,setTestBlob] = useState();

  const uploadFile = (e)=>{
    e.preventDefault();
    const formdata = new FormData(e.target);
    const obj = Object.fromEntries(formdata);

    const fr = new FileReader();
    fr.readAsDataURL(obj.upload);
    
    fr.addEventListener('load',()=>{
        axios.post('/api/upload/files',{
            title:obj.title,
            imgUrl:fr.result
        })        
    })
  }

  const getFile = async ()=>{
    const d = await axios.get('/api/upload/files');
    const setD = d.data.map(obj=>{
        obj.imgUrl = base64Blob(obj.imgUrl);
        return obj;
    })
    setData(setD)
  }


  function base64Blob(b64Data,contentType='') {
    const image_data = atob(b64Data.split(',')[1]); 
 
    const arraybuffer = new ArrayBuffer(image_data.length);
    const view = new Uint8Array(arraybuffer);
 
    for (let i = 0; i < image_data.length; i++) {
       view[i] = image_data.charCodeAt(i) & 0xff;
    }
 
    const blob =  new Blob([arraybuffer], { type: contentType });
    return URL.createObjectURL(blob); 
 }
 

  useEffect(()=>{
    getFile();
  },[])

  return (
    <div>
        <h2>파일업로드</h2>
        <form 
            onSubmit={uploadFile} 
            method="post"
            encType="multipart/form-data"
        >
            <p><input type="text" name="title"/></p>
            <p>
                <input type="file" name="upload"
                    onChange={(e)=>{
                        const file = e.target.files[0];
                        file && setImageView(  URL.createObjectURL(file)  )
                    }}
                />
                <img src={imageView} width="200"/>
            </p>
            <p><input type="submit" value="저장"/></p>
        </form>

        <div>
            {
                data.map(obj=>(
                    <figure key={obj.num}>
                        <img src={obj.imgUrl} alt="" width="200"/>
                        <figcaption>{obj.title}</figcaption>
                    </figure>
                ))
            }
        </div>
    </div>
  )
}

export default Upload