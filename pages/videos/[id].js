import { useRouter } from 'next/router'

const Video = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>Video: {id}</p>
}

export default Video