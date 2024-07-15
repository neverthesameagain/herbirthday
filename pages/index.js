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
        active="https://instagram.fdel27-4.fna.fbcdn.net/v/t51.2885-19/439101566_1510815249647904_6880295854075937772_n.jpg?_nc_ht=instagram.fdel27-4.fna.fbcdn.net&_nc_cat=100&_nc_ohc=ULiNZMjyYpEQ7kNvgHlHUIr&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYCvNRMbBs-UK925VV3OarDToMUWdqjTMTo6iueO09HVUw&oe=669AA549&_nc_sid=8f1549"
        primary
        left
      />

      <div className="flex flex-row justify-around items-center text-center w-full h-96 bg-pink-200 p-5">
        <h1 className='w-2/3 text-pink-400 font-bold text-6xl'> Who are you in the Pandaland? </h1>
      </div>

      <div className="flex flex-row justify-around items-center text-center w-full h-96 bg-pink-50 p-5">
        <h1 className='w-2/3 text-pink-300 font-bold text-6xl'>Do you know that panda Loves you?</h1>
      </div>

      <CornyQuestion 
        question="When did we first meet?"
        nonactive="https://loudbooru.com/_images/a1c2fa54153d30da1045a967fe8fd8a9/9228%20-%20character%3Alincoln_loud%20character%3Athe_red_guy%20cow_and_chicken%20crossover%20devil%20dialogue%20satan.png"
        active="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/860bb581-65ee-4112-854f-1255c5579143/dffb3t8-d1a0991f-db5c-49ff-a7f2-2bc8d3278004.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg2MGJiNTgxLTY1ZWUtNDExMi04NTRmLTEyNTVjNTU3OTE0M1wvZGZmYjN0OC1kMWEwOTkxZi1kYjVjLTQ5ZmYtYTdmMi0yYmM4ZDMyNzgwMDQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.F2pBVw7v1HfA3zLlC5V5lc1xberJTFDwLT_GoKlT7Vw"
        secondary
        right
      />


      <CornyQuestion 
        question="Would you please let Aryan surprise you today?"
        nonactive="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0a76b087-d923-4acf-85c5-118e6b81c7a0/d70lfsz-0a567aaf-a3ec-4cca-ac87-3820e4727e8f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBhNzZiMDg3LWQ5MjMtNGFjZi04NWM1LTExOGU2YjgxYzdhMFwvZDcwbGZzei0wYTU2N2FhZi1hM2VjLTRjY2EtYWM4Ny0zODIwZTQ3MjdlOGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PZQsxdrOyzYABwsLATW4K94fX8RQBzUIzLrR-l8BDPU"
        active="https://i.redd.it/v0ep5v1vbl331.png"
        secondary
        right
      />

      <div className="flex flex-row justify-around items-center text-center w-full h-96 bg-pink-50 px-5 pt-5">
        <h1 className='w-2/3 text-pink-400 font-bold text-6xl'>If I&apos;m C would you be my C++ today?</h1>
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
        <div className="flex flex-col justify-around items-center text-center w-full h-[58em] bg-pink-200 p-5">
          <h1 className='w-2/3 text-pink-400 font-bold text-6xl'>So here is The Plan </h1>
          <div className="flex flex-col items-center gap-5 text-center w-3/4 h-5/6 bg-white p-5 rounded-3xl shadow-xl">
            <img className="h-24" src="https://cdn.pixabay.com/photo/2018/02/19/20/28/abstract-3166168__480.png" alt=""/>
            <h1 className='w-2/3 text-black font-bold text-4xl underline'>
              Thank You For Your Confirmation!
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
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
              3 P.M.
            </h3>
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
              • A celestial oddysey •
            </h3>
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
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
