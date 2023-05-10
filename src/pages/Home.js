
function getRandomHexColor() {   
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`; 
};

const color = getRandomHexColor();

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 700,
    fontSize: 96,
    textAlign: 'center',
    color: color,
  },
};

export default function Home() {
  
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Contacts manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
      
    </div>
  );
}
