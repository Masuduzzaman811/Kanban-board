const hitApi = () => {
    fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(({ name: 'My cool new game' })),
    })
      .then((res) => res.text())
      
     .then((result) => console.log(result));
  };
  
  export default hitApi;