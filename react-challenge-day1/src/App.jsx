import ProfileCard from "./ProfileCard"; 

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f2f5' }}>

      <ProfileCard
        name="Blaze"
        role="Computer Scientist"
        bio="Hi! This is a 30 days React challenge. I am excited to learn and build awesome projects!"
      />
    </div>
  );
}

export default App;

