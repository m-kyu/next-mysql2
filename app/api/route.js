import axios from "axios";
import { queryExecute } from "./db";

export async function POST(req){
    const {name,email,id} = await req.json();
    const data = await queryExecute(`insert into member (id,name,email) values (?,?,?)`,[id,name,email])
    return Response.json([]);
}


export async function GET(){   
     const data = await queryExecute('select * from member')
    return Response.json(data);
}





// const data = await queryExecute('select * from member')
    // const data = await queryExecute(`insert into member (id,name,email) values ('abc','홍길순','hong@gmail.com')`)
    //const data = await queryExecute(`update member set name='차민규' where num = 7`)
    //const data = await queryExecute(`delete from member where num=8`)


    // const data = await queryExecute(`
    //     create table contact (
    //         name varchar(30),
    //         email varchar(100),
    //         contents text,
    //         num int not null auto_increment,
    //         primary key(num)
    //     )
    // `)
    // const data = await queryExecute(`drop table contact`);