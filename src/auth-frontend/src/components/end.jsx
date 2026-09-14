import gif from '../welcome.webp';

function End() {
  return (
    <div className='gif-container'>
      
      <img src={gif} alt="Welcome" loading="lazy" />
    </div>
  );
}

export default End;