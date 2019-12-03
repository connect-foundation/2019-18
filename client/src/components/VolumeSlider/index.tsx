import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import VolumeUp from '@material-ui/icons/VolumeUp';
import { theme } from '../../style/theme';

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
  const [value, setValue] = React.useState<number>(30);

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
