module.exports = {

    addProduct: (req, res) => {
        const db = req.app.get('db');
        const { name, description, price, image_url } = req.body;

        db.addProduct_product([name, description, price, image_url])
          .then( product => res.sendStatus(200).send(product))
          .catch( err => {res.status(500).send(err);
        });
      },
    
      getOneProduct: (req, res) => {
        const db = req.app.get('db');
    
        db.read_product()
          .then( product => res.status(200).send(product))
          .catch( err => {res.status(500).send(err);
          });
      },
    
      getAllProducts: (req, res) => {
        const db = req.app.get('db');
    
        db.read_products()
          .then( products => res.status(200).send(products))
          .catch( err => {res.status(500).send(err);
          });
      },
    
      updateProducts: (req, res) => {
        const db = req.app.get('db');
    
        db.update_product()
          .then( product => res.sendStatus(200))
          .catch( err => {res.status(500).send(err);
          });
      },
    
      deleteProducts: (req, res) => {
        const db = req.app.get('db');
    
        db.delete_product()
          .then( product => res.sendStatus(200))
          .catch( err => {res.status(500).send(err);
          });
      }
    };