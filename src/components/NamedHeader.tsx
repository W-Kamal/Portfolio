// const profileImg = "src/assets/myFace.webp"

const NamedHeader = () => {
  return (
    <div className='profile'>
      <picture className='profile__container'>
        {/* <img csslassName="profile__img" src={profileImg} alt="Hello, this is me"></img> */}
      </picture>
      <span className='profile__name'>Wardi Kamal</span>
    </div>
  )
}

export default NamedHeader
