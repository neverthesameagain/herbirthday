import CommentedImage from '../components/Commented Image'
import CornyQuestion from '../components/Corny Question'
import RandomButton from '../components/Random Button'

import { useRef, useState } from 'react'

import {
  Button,
  Code,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'

export default function Home() 
{
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()
  const [confirmed, setConfirmation] = useState(false)

  return (
    <>
    
      <div className="flex flex-row justify-center items-center w-full h-full bg-pink-200 p-10 drop-shadow-xl">
        <div className="w-2/3 h-64 bg-gradient-to-r from-pink-300 to-pink-300 drop-shadow-xl rounded-full text-center transition-all duration-300">
          <h1 className="p-20 tracking-wide text-6l font-bold text-white uppercase drop-shadow-lg">Yayy!! It is Krrruuuuuuuu Day!!! My pandii is officially 20 year old now! and her dear panda has planned somethings for her, but wait, if he tells her already, what would be the fun? Here are a few Glimpses..  </h1>
        </div>
      </div>

      <div className="flex flex-row items-center justify-evenly w-full h-96 bg-pink-50">
        <CommentedImage src='/Krushi1.jpg' text="Aww so pretty, how about a Rose?"/>
        <CommentedImage src='/Krushi2.jpg' text="A chocolate for my heart?"/>
        <CommentedImage src='/Krushi3.jpg' text="We definitely should hug!"/>
      </div>

      <div className="text-center w-full h-64 bg-pink-200 drop-shadow-xl">
        <h1 className="p-20 tracking-wide text-6xl font-bold text-pink-400 uppercase drop-shadow-xl">So my dear Krruuu,</h1>
      </div>

      <div className="flex flex-col items-center text-center w-full h-96 bg-pink-50 p-10">
        <div className="flex flex-row items-center text-center w-full h-5/6 bg-pink-50">
          <h1 className='w-1/3 text-pink-300 font-bold text-6xl'>Are you excited for today?</h1>
          <img src='https://sweezy-cursors.com/wp-content/uploads/cursor/milk-amp-mocha-bear-love/milk-mocha-bear-love-custom-cursor.png' width={600}/>
          <h1 className='w-1/3 text-pink-300 font-bold text-6xl'>So am I!</h1>
        </div>
        <h1 className="w-full h-1/4 text-pink-300  text-6xl uppercase">And you wanna know the plans right? </h1>
      </div>

      <div className="text-center w-full h-64 bg-pink-200 drop-shadow-xl">
        <h1 className="p-20 tracking-wide text-6xl font-bold text-pink-400 uppercase drop-shadow-xl">Before that, Answer some simple questions first,</h1>
      </div>

      <CornyQuestion 
        question="What does Aryan have deep in his heart?"
        nonactive="https://www.freepnglogos.com/uploads/panda-png/hungry-panda-eats-spam-google-panda-16.png"
        active='/Krushi4.jpg'
        primary
        left
      />

      <div className="flex flex-row justify-around items-center text-center w-full h-96 bg-pink-200 p-5">
        <h1 className='w-2/3 text-pink-400 font-bold text-6xl'> Who are you in the Pandaland? </h1>
      </div>

      <div className="flex flex-row justify-around items-center text-center w-full h-96 bg-pink-50 p-5">
        <h1 className='w-2/3 text-pink-300 font-bold text-6xl'>Do you know that panda Loves you?</h1>
      </div>
      <div className="flex flex-row justify-around items-center text-center w-full h-96 bg-pink-50 p-5">
        <h1 className='w-2/3 text-pink-300 font-bold text-6xl'>When did we first meet?</h1>
      </div>




      <CornyQuestion 
        question="Would you please let Aryan surprise you today?"
        nonactive="https://www.onlygfx.com/wp-content/uploads/2018/09/4-comic-question-mark-2.png"
        active="https://cdn-icons-png.freepik.com/512/1791/1791307.png?ga=GA1.1.1680543500.1721035900"
        secondary
        right
      />

      <div className="flex flex-row justify-around items-center text-center w-full h-96 bg-pink-50 px-5 pt-5">
        <h1 className='w-2/3 text-pink-400 font-bold text-6xl'>If I&apos;m C would you be my C++ today? Will you be the em to my po?</h1>
      </div>

      <div className="flex flex-row justify-around items-start text-center w-full h-36 bg-pink-50 pb-5">
        <RandomButton 
          text="No"
          minHeight={ 4600 }
          maxHeight={ 5000 }
        />

        <button 
          className="w-36 bg-pink-400 text-white text-2xl p-5 rounded-2xl"
          onClick={ onOpen }
        >
          YES
        </button>

        <AlertDialog
          isOpen={ isOpen }
          leastDestructiveRef={ cancelRef }
          onClose={ onClose } 
        >
          <AlertDialogOverlay>
            <AlertDialogContent>

              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                OMG.
              </AlertDialogHeader>

              <AlertDialogBody>
                Yayy! SHE JUST SAID YES?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button 
                  colorScheme='pink' 
                  ref={ cancelRef } 
                  onClick={
                    () => 
                    {
                      onClose();
                      setConfirmation(true);
                    }
                  }
                >
                  Confirm
                </Button>
              </AlertDialogFooter>

            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </div>

      {
        confirmed ? 
        <div className="flex flex-col justify-around items-center text-center w-full h-[98em] bg-pink-200 p-5">
          <h1 className='w-2/3 text-pink-400 font-bold text-6xl'> ~ Krruu Day ~ </h1>
          <div className="flex flex-col items-center gap-5 text-center w-3/4 min-h-screen bg-white p-5 rounded-3xl shadow-xl">
            <img className="h-24" src="https://cdn.pixabay.com/photo/2018/02/19/20/28/abstract-3166168__480.png" alt=""/>
            <h1 className='w-2/3 text-black font-bold text-4xl underline'>
              The initial plan was something like below but now things seem to have changed, look through , stay surprised!
            </h1>
            <h2 className='w-2/3 text-black opacity-75 font-bold italic text-2xl'>
              Krushi Thakkar and Aryan Mathur
            </h2>
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
              16th July 2024
            </h3>
            <h2 className='w-2/3 text-black opacity-75 font-bold italic text-2xl'>
              New Delhi
            </h2>
            <h3 className='w-2/3 text-black opacity-90 text-2xl'>
              • 9:30 A.M. •
            </h3>
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
              • A Spiritual Visit •
            </h3>
            <h3 className='w-2/3 text-black opacity-90  text-2xl'>
              1 P.M.
            </h3>
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
              • The buds of taste •
            </h3>

            <h3 className='w-2/3 text-black opacity-90 text-2xl'>
              1:30 P.M.
            </h3>
            <h2 className='w-2/3 text-black opacity-75 font-bold italic text-2xl'>
              • The Mirror Maze •
            </h2>
            <h3 className='w-2/3 text-black opacity-90  text-2xl'>
              3 P.M.
            </h3>
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
              • A celestial oddysey •
            </h3>
            <h3 className='w-2/3 text-black opacity-90  text-2xl'>
              4 P.M. [ Depending upon how tired we are ]
            </h3>
            <h2 className='w-2/3 text-black opacity-75 font-bold italic text-2xl'>
              • Aesthetic Overturn / Sensory Peace •  
            </h2>
            <h3 className='w-2/3 text-black opacity-90  text-2xl'>
              6:30 P.M.
            </h3>
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
              • Dinnerati •
            </h3>
            <h3 className='w-2/3 text-black opacity-90  text-2xl'>
              7:30 P.M.
            </h3>
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
              • The Final One •
            </h3>
            <img className="h-24" src="https://cdn.pixabay.com/photo/2018/02/19/20/28/abstract-3166168__480.png" alt=""/>
          </div>
        </div>
        : 
        <></>
      }
    
    </>
  )
}
