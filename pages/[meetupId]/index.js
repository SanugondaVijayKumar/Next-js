import { Fragment } from "react";
import MeetupDetail from "@/components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg"
      title="First Meetup"
      address="Some street 5,some city"
      description="This is a first meetup"
    ></MeetupDetail>
  );
}

export default MeetupDetails;
