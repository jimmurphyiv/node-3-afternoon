module.exports = {

    addProduct: (req, res) => {
        const dbInstance = req.app.get('db');
        const { name, description, price, image_url } = req.body;

        dbInstance.addProduct_product([name, description, price, image_url])
          .then( () => res.sendStatus(200))
          .catch( err => {res.status(500).send(err);
        });
      },
    
      getOneProduct: (req, res) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.read_product()
          .then( product => res.status(200).send(product))
          .catch( err => {res.status(500).send(err);
          });
      },
    
      getAllProducts: (req, res) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.read_products()
          .then( products => res.status(200).send(products))
          .catch( err => {res.status(500).send(err);
          });
      },
    
      updateProducts: (req, res) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.update_product()
          .then( () => res.sendStatus(200))
          .catch( err => {res.status(500).send(err);
          });
      },
    
      deleteProducts: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.delete_product()
          .then( () => res.sendStatus(200))
          .catch( err => {res.status(500).send(err);
          });
      }
    };