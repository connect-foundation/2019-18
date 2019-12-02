import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

interface ContinuousSliderProp{
    volume: number;
    handleChange: (event: any, newValue: number | number[])=> void;
}

const ContinuousSlider:React.FC<ContinuousSliderProp> = ({ volume, handleChange }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState<number>(30);

  //   const handleChange = (event: any, newValue: number | number[]) => {
  //     console.log(newValue);
  //     setValue(newValue as number);
  //   };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider value={volume} onChange={handleChange} aria-labelledby="continuous-slider" />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
    </div>
  );
};

export default ContinuousSlider;
