type Props = {
  params: {
    username: string;
  };
};

const User = ({ params }: Props) => {
  return (
    <div>
      <h1>Welcome {params.username}</h1>
    </div>
  );
};

export default User;
