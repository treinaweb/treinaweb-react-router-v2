import { useParams, useSearchParams } from "react-router-dom"

export default function About() {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  
  return <h3 onClick={() => setSearchParams({b: 8})}>About - {params.id} - {searchParams.get('a')} - {searchParams.get('b')}</h3>
}