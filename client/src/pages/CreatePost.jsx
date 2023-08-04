import React from 'react'
import {useNavigate} from 'react-router-dom';

import {preview} from '../utils';
import {getRandomPrompt} from '../utils';
import { FormField, Loader } from '../components';


const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });
  const [loading, setLoading] = useState(false);
  const [generatingImg, setGeneratingImg] = useState(false);

  const handleSubmit =() => {

  }

  const handleChange = (e) => {
      
  }

  const handleSurpriseMe = () =>{

  }

  
  return (
    <section className='max-w-7xl mx-auto'>
      <div >
        <h1 className='font-extrabold text-[#222328] text-[32px]'>Create</h1>
        <p className='mt-2 text-[#666e75] text-[14px] max-w[500px]'>Create imaginative and visually stunning images generated by DALL-E AI adn share them wiht the community</p>
      </div>

      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="Krishna"
            value={form.name}
            handleChange={handleChange}

          />
        </div>
      </form>
    </section>
  )
}

export default CreatePost
