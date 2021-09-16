import React, { Fragment } from "react";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";

import EventList from "./../../components/events/event-list";
import { useRouter } from "next/router";
const AllEventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }
  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export default AllEventsPage;
