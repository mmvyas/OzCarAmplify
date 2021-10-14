import { Snackbar, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import React from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CircleIcon from "@mui/icons-material/Circle";
import Tooltip from "@mui/material/Tooltip";

class CarView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSnackBar: false,
      selectedOption:
        props.car &&
        props.car.options &&
        props.car.options.length > 0 &&
        props.car.options[0],
    };
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      selectedOption:
        nextProps.car &&
        nextProps.car.options &&
        nextProps.car.options.length > 0 &&
        nextProps.car.options[0],
    });
  };

  changeOption = (option) => {
    this.setState({
      selectedOption: option,
    });
  };

  openSnackBar = () => {
    this.setState({
      openSnackBar: true,
    });
    const link = document.createElement("a");
    link.download = `${this.props.car.make}-${this.props.car.model}-${this.props.car.year}.pdf`;
    link.href = "./download.txt";
    link.click();
  };

  closeSnackBar = () => {
    this.setState({
      openSnackBar: false,
    });
  };

  render() {
    let car = this.props.car;
    return (
      <Wrapper>
        {car && (
          <div>
            <Card>
              <CardMedia
                component="img"
                alt={this.state.selectedOption.color}
                image={this.state.selectedOption.image}
              />
            </Card>
            <div className="text-center pb-1">
              <ul className="list-inline">
                {car.options.map((option, index) => (
                  <li
                    className="list-inline-item text-center"
                    style={{ margin: 0 }}
                  >
                    <Tooltip title={option.exterior} arrow>
                      <Button onClick={() => this.changeOption(option)}>
                        <CircleIcon
                          sx={{ color: `${option.color}`, fontSize: 17 }}
                        />
                      </Button>
                    </Tooltip>
                  </li>
                ))}
              </ul>
            </div>
            <Typography variant="body2" color="text.secondary">
              Exterior
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {this.state.selectedOption.exterior}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ textAlign: "justify" }}
            >
              Audi is showing an interpretation of the sedan of the future. The
              second in a series of visionary concept cars provides a glimpse of
              how tomorrow’s first-class automotive comfort will look: electric,
              automated², intuitive – and with plenty of individual space for
              immersive experiences.
            </Typography>
            <br />
            <Button
              variant="contained"
              onClick={this.openSnackBar}
              sx={{
                backgroundColor: "#cd853f",
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "#cd853f",
                },
              }}
            >
              Request a Brochure
            </Button>
          </div>
        )}
        <Snackbar
          open={this.state.openSnackBar}
          autoHideDuration={3000}
          onClose={this.closeSnackBar}
          message="Brochure downloaded successfully!"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;

export default CarView;
