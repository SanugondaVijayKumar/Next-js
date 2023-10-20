import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import Layout from "@/components/layout/Layout";

function NewMeetupPage() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>;
}

export default NewMeetupPage;
