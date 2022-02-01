import { getEventById } from '../../dummy-data';
import { useRouter } from 'next/router';

const EventDetailPage = () => {
   const router = useRouter();

   const { eventid: eventId } = router.query;
   const event = getEventById(eventId);

   if (!event) {
      return <p>No event found</p>;
   }

   return (
      <div>
         <h1>Event Detail Page</h1>
      </div>
   );
};

export default EventDetailPage;
