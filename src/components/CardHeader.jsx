import LinearProgress from '@mui/material/LinearProgress';

const CardHeader = ({progress}) => {
  return (
    <div className='rounded-t shadow-md'>
            <div className='px-5 py-3 text-lg font-bold'>
              <h1>Awesome Quiz Application</h1>
            </div>
            <div>
              <LinearProgress variant="determinate" value={progress} />
            </div>
    </div>
  )
}

export default CardHeader