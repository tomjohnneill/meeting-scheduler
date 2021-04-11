import { useEffect, useState } from 'react';

const PopupAds = ({ handleClick }) => {
  const [popUp, setPopUp] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setPopUp(0);
    }, 1000);
  }, []);

  const handlePopUp = () => {
    const newPop = popUp + 1;
    setPopUp(null);
    setTimeout(() => {
      setPopUp(newPop);
    }, 400);
  };

  const ads = [
    {
      title: 'Congratulations!!!!!',
      titleStyle: 'font-bold',
      image:
        'https://cdn.vox-cdn.com/thumbor/XKrMqqGnvhJqbwt9DvTjGDPcG7M=/1600x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22341197/doge.gif',
      body: "You're our 5000th visitor! You WIN 50,000M DogeCoin",
      buttonText: 'CLICK TO CLAIM YOUR PRIZE',
      buttonColor: 'bg-green-500',
      bar: 'bg-blue-900 h-7',
      animation: 'flashy',
      border: 'border border-blue-900',
    },
    {
      title: '60% of the time, it works every time',
      titleStyle: 'text-red-500 font-bold',
      image: '/ads/sexpanther.png',
      buttonText: 'ORDER YOURS TODAY',
      buttonColor: 'bg-red-500 flashy',
      bar: 'bg-red-500 h-7',
      border: 'border-4 border-red-500 border-dashed',
    },
  ];

  const Ads = () => {
    return (
      <>
        <div
          className={`shadow-xl absolute right-0 mr-16 w-64 z-40 flex flex-col justify-center bg-white ${ads[popUp].border}`}
        >
          <div className={`${ads[popUp].bar} flex justify-end`}>
            <button className="absolute right-0 mr-1 text-white">x</button>
          </div>
          <h2
            className={`text-2xl m-1 text-center ${ads[popUp].animation} ${ads[popUp].titleStyle}`}
          >
            {ads[popUp].title}
          </h2>
          <div className={`flex justify-center`}>
            <img
              src={ads[popUp].image}
              className={ads[popUp].body ? 'w-32' : 'h-40'}
            />
            {ads[popUp].body && <p className="pl-2">{ads[popUp].body}</p>}
          </div>
          <button
            className={`${ads[popUp].buttonColor} text-white shadow p-1 m-2 justify-center`}
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
        {
          <button
            onClick={() => handleClick('No')}
            className="px-2 py-1 border rounded border-gray-300 opacity-80 text-gray-600 transition-all"
          >
            No
          </button>
        }

        <button onClick={() => handleClick('Yes')} className="yes-button ml-2">
          Yes
        </button>
      </div>
    </div>
  );
};

export default PopupAds;
