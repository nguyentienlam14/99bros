import React, { useState } from 'react';
import { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';

function UserPhoneData(props) {
  const [phone, setPhone] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    setPhone(props.data);
  }, [props.data]);

  const sortPriceDown = () => {
    const sortData = [...phone];
    sortData.sort((a, b) => a.price - b.price);
    setPhone(sortData);
  };

  const sortPriceUp = () => {
    const sortData = [...phone];
    sortData.sort((a, b) => b.price - a.price);
    setPhone(sortData);
  };

  var phone_list = [];
  var count = 0;
  if (phone != null) {
    phone_list = phone.map((item) => {
      if (count < 6) {
        count++;
        return (
          <div className="col-md-4 col-sm-6 mt-4 text-center">
            <div className="card" style={{ width: 300 }}>
              <img
                src={item.picture}
                className="card-img-top"
                width={300}
              />
              <div className="card-body">
                <h5 className="card-title"> {item.name} </h5>
                <p className="card-text"> ${item.price}</p>

                <Link to={'/buy/' + item.id}>
                  <button className="btn btn-primary"> Buy </button>
                </Link>
              </div>

              
            </div>
          </div>
        );
      } else {
        return;
      }
    });
  }


  return (
    <>
      <div>
        <button
          className="btn btn-outline-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          aria-expanded="false"
        >
          Sort Price
        </button>

        <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
          <li>
            <button className="dropdown-item" onClick={() => sortPriceUp()}>
              High to Low
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => sortPriceDown()}>
              Low to High
            </button>
          </li>
        </ul>
      </div>
      {phone_list}
    </>
  );
}

export default UserPhoneData;
