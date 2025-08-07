function Banner() {

  const banners = [
    { backdrop_path: '/fTrQsdMS2MUw00RnzH0r3JWHhts.jpg', title: 'A Working Man' },
    { backdrop_path: '/j0NUh5irX7q2jIRtbLo8TZyRn6y.jpg', title: 'Final Destination Bloodlines' },
    { backdrop_path: '/7ONMDhnErvpkKvkZqM82ud7bzcT.jpg', title: 'Mission: Impossible - The Final Reckoning' },
    { backdrop_path: '/rthMuZfFv4fqEU4JVbgSW9wQ8rs.jpg', title: 'Thunderbolts*' },
    { backdrop_path: '/eCqIpFpYIcZpCBexU3y8BfZKR7f.jpg', title: 'Lilo & Stitch' }
  ];

  const selectedBanner = banners[(Math.floor(Math.random() * 10) % banners.length)];
  

  return (
    <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${selectedBanner.backdrop_path})`, backgroundSize: 'cover'}} className='w-[100%] h-[80vh] flex items-end justify-end'>
        <div className='text-center text-[20px] text-white bg-gray-700 p-2 m-1'>{selectedBanner.title}</div>
    </div>
  )
}

export default Banner