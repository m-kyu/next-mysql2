import Link from "next/link";
import Upload from "./comp/Upload";


export default function Home() {

  const testEnv = process.env.NODE_HOST
  console.log(testEnv)

  return (
    <>
    {testEnv}
      <h1>MariaDB CRUD</h1>
      <Link href="./pages/insert">글작성</Link>
      <Link href="./pages/list">리스트</Link>

      <hr />
      <Upload/>



    </>
  )
}
