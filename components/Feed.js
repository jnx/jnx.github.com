import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res)

const Feed = () => {
  const { data, error, isLoading } = useSWR('/youtube/feeds/videos.xml?channel_id=UCNUzYcystxs_gx9mNc4xi-A', fetcher)

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>

  console.log(data)

  return (
    <div>{data.length}</div>
  )
}

export default Feed;
