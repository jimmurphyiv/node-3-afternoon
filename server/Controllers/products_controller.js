module.exports = {

    getAllProducts: (req, res) => {
        const db = req.app.get('db');
    
        db.read_products('db')
          .then(products => {res.status(200).send(products);
          })
          .catch(err => { res.status(500).send(err);
          });
      },
    
    create: (req, res) => {
        const db = req.app.get('db');
        const { name, description, price, image_url } = req.body;

        db.create_product(name, description, price, image_url)
          .then( () => res.sendStatus(200))
          .catch(err => res.status(500).send(err)
        );
      },
    
      getOneProduct: (req, res,) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.read_product({id})
          .then(product => res.status(200).send(product))
          .catch(err => { res.status(500).send(err);
          });
      },
    
      
      updateProducts: (req, res) => {
        const {id} =req.params,
        {description} = req.body
         db = req.app.get('db');
       

        db.update_product({description, id})
          .then( () => res.sendStatus(200))
          .catch(err => { res.status(500).send(err);
          });
      },
    
      deleteProducts: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.delete_product({id})
          .then( () => res.sendStatus(200))
          .catch(err => { res.status(500).send(err);
          });
      }
    };