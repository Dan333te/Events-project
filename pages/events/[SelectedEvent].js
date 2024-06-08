import ButtonAndDate from "@/Components/ButtonAndDate";
import EventDescription from "@/Components/EventDescription";
import Summary from "@/Components/Summary";
import { GetEventId } from "@/Dummy";
import Router, { useRouter } from "next/router";
import classes from "../../Components/ButtonAndDate.module.css";
const SelectedEvent = () => {
  const router = useRouter();
  console.log(router.query.SelectedEvent);
  const event = GetEventId(router.query.SelectedEvent);
  console.log(event);
  return (
    <div className={classes.card}>
      <Summary
        title={event.name}
        imgURL={event.imageUrl}
        date={event.date}
        Location={event.address}
      />
      {!event && <p>Event not found</p>}
      <EventDescription description={event.description} />
      <ButtonAndDate date={event.date} />
    </div>
  );
};
export default SelectedEvent;
