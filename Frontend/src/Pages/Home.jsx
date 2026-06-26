const Home = ({ navigate }) => {
  const buttonStyle = { padding: '10px 20px', backgroundColor: '#3277c1', color: 'white', border: 'none', cursor: 'pointer' }
  return (
    <div style={{ padding: '20px', textAlign: 'center', marginTop: '50px' }}>
      <h1>Home</h1>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
        <button onClick={() => navigate('register')} style={buttonStyle}>Register</button>
        <button onClick={() => navigate('login')} style={buttonStyle}>Login</button>
      </div>
    </div>
  )
}
export default Home