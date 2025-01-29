function salvaListaInJson() {
    const elementiLista = [];
    
    // Itera sugli elementi della lista
    Array.from(lista.children).forEach((elemento) => {
      // Ignora l'elemento "La lista è vuota"
      if (elemento.id !== 'messaggioVuota') {
        elementiLista.push(elemento.textContent.replace('🗑️', '').trim());
      }
    });