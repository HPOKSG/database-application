const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form>
      <input
        type='text'
        name='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='email'
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        name='message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </form>
  );
};
