import Image from 'next/image';

const LOGOS = [
    <Image key={0} src={"/codedamn.svg"} width={0} height={0} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' className='w-full h-1/4' alt="codedamn" />,
    <Image key={1} src={"/digitea.svg"} width={0} height={0} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' className='w-full h-1/4' alt="digitea" />,
    <Image key={2} src={"/fountane_logo.svg"} width={0} height={0} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' className='w-full h-1/4' alt="fountane" />,
    <Image key={3} src={"/fueler_logo.svg"} width={0} height={0} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' className='w-full h-1/4' alt="fueler" />,
    <Image key={4} src={"/sema-logo.svg"} width={0} height={0} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' className='w-full h-1/4' alt="sema" />,
    <Image key={5} src={"/wemakedevs.png"} width={1000} height={96} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' className='w-full h-1/4' alt="wemakedevs" />,
    <Image key={6} src={"/happyturtleyoga.png"} width={1000} height={96} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' className='w-full h-1/4' alt="happyturtleyoga" />,
];

export default LOGOS;