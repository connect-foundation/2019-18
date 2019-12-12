import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 150,
  },
});


interface ContinuousSliderProp{
    volume: number;
    handleChange: (event: any, newValue: number | number[])=> void;
}

const ContinuousSlider:React.FC<ContinuousSliderProp> = ({ volume, handleChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        value={volume}
        onChange={handleChange}
        aria-labelledby="continuous-slider"
        color="primary"
      />
    </div>
  );
};

export default ContinuousSlider;
