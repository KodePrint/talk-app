import { useSessionUser } from "hooks/useSessionUser";

const ConversationForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <>
      <form action="">
        <input type="text" placeholder="name room" />
      </form>
    </>
  );
}

export default ConversationForm;