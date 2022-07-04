import React, { useState } from 'react';
import { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/main.css';

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
                <div class="col-md-4 mb-4">
                  <div class="card overflow-hidden shadow"> <img class="card-img-top" src={item.image} height='300'/>
                    <div class="card-body py-4 px-3">  

                      <div class="d-flex align-items-center"><span class="fs-0 fw-medium"><h4 class="text-secondary fw-medium">Rome, Italty</h4><span class="fs-0 fw-medium" style={{color: 'black'}}>Địa chỉ: {item.DiaChi}</span></span></div>

                      <div class="d-flex align-items-center"><span class="fs-0 fw-medium">Mức Giá: {item.MucGia}</span></div>

                      <div class="d-flex align-items-center"><span class="fs-0 fw-medium">Diện tích: {item.DienTich}</span>
                      
                      <i class="far fa-heart text-end" style={{paddingLeft: "12rem",}}></i>
                      </div>

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
