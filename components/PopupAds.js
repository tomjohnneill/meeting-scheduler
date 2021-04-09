import { useEffect, useState } from 'react';

const PopupAds = ({ handleClick }) => {
  const [popUp, setPopUp] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setPopUp(0);
    }, 1000);
  }, []);

  const handlePopUp = () => {
    setTimeout(() => {
      setPopUp(popUp + 1);
    }, 300);
  };

  const ads = [
    {
      title: 'Congratulations!!!!!',
      image:
        'https://cdn.vox-cdn.com/thumbor/XKrMqqGnvhJqbwt9DvTjGDPcG7M=/1600x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22341197/doge.gif',
      body: "You're the 5000th visitor! You WIN 5M DogeCoin",
      buttonText: 'dgdfg',
      bgColor: 'bg-red-400',
      animation: "flashy",
      border: "bg-red-400",
    },
    {
      title: "You're a winner!!!",
      image: '/galaxy/Slice 1.png',
      body: 'AD TWO',
      buttonText: 'CLICK TO CLAIM YOUR PRIZE',
      bgColor: 'bg-blue-400',
      border: 'border-4 border-red-500 border-dashed',
    },
    {
      title: 'Claim $$$ from your trip or fall anywhere',
      image: '/galaxy/Slice 1.png',
      body: 'You recently had a fall from a miniature horse at work. ',
      buttonText: 'Sue everyone now!',
      bgColor: 'bg-blue-500',
      border: 'border-4 border-blue-500',
    },
  ];

  const Ads = () => {
    return (
      <>
        <div
          className={`absolute right-0 mr-12 border-2 border-gray-300 w-64 z-40 flex flex-col justify-center ${ads[popUp].border}`}
        >
          <div className={`${ads[popUp].bgColor} flex justify-between `}>
            <h2 className={`text-2xl m-1 ${ads[popUp].animation}`}>{ads[popUp].title}</h2>

            <button className="right-0 mr-1" onClick={handlePopUp}>
              x
            </button>
          </div>
          <div className={`flex`}>
            <img src={ads[popUp].image} className="w-32" />
            <p className="p-3">{ads[popUp].body} </p>
          </div>
          <button
            className={`bg-green-400 rounded p-1 m-2 justify-center`}
            onClick={handlePopUp}
          >
            {ads[popUp].buttonText}
          </button>
        </div>
        <style jsx>{`
          .flashy {
            animation: flash 1s linear infinite;
          }

          @keyframes flash {
            50% {
              opacity: 0;
            }
          }
        `}</style>
      </>
    );
  };

  console.log({ ads });

  return (
    <div className="flex relative">
      {ads[popUp] && <Ads />}
      <div>
      { (
        <button
          onClick={() => handleClick('No')}
          className="px-2 py-1 border rounded border-gray-300 opacity-80 text-gray-600 transition-all"
        >
          No
        </button>
      )}
  
        <button className="px-2 py-1 rounded bg-blue-500 opacity-80 text-white ml-2">
          Yes
        </button>
      </div>
    </div>
  );
};

export default PopupAds;
