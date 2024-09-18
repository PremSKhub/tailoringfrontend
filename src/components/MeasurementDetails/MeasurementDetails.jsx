import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

import './MeasurementDetails.css';
import Page1Logo from '../../assets/page1logo.png';
import Edit from '../../assets/edit.svg';
import Trash from '../../assets/trash.svg';
import Save from '../../assets/save.svg';
import Cancel from '../../assets/cancel.svg';

const MEASUREMENTS = {
  'Formal': [
    { id: 1, measurement: 'Hip', value: 180, unit: 'cm' },
    { id: 2, measurement: 'Neck', value: 50, unit: 'cm' },
    { id: 3, measurement: 'Chest', value: 110, unit: 'cm' },
    { id: 4, measurement: 'Waist', value: 120, unit: 'cm' },
    { id: 5, measurement: 'Shoulder', value: 60, unit: 'cm' },
    { id: 6, measurement: 'Sleeve', value: 10, unit: 'cm' },
    { id: 7, measurement: 'Arm', value: 90, unit: 'cm' }
  ],
  'Casual': [
    { id: 1, measurement: 'Hip', value: 1, unit: 'cm' },
    { id: 2, measurement: 'Neck', value: 52, unit: 'cm' },
    { id: 3, measurement: 'Chest', value: 10, unit: 'cm' },
    { id: 4, measurement: 'Waist', value: 12, unit: 'cm' },
    { id: 5, measurement: 'Shoulder', value: 6, unit: 'cm' },
    { id: 6, measurement: 'Sleeve', value: 11, unit: 'cm' },
    { id: 7, measurement: 'Arm', value: 67, unit: 'cm' }
  ],
  'Party Wear': [
    { id: 1, measurement: 'Hip', value: 10, unit: 'cm' },
    { id: 2, measurement: 'Neck', value: 5, unit: 'cm' },
    { id: 3, measurement: 'Chest', value: 7, unit: 'cm' },
    { id: 4, measurement: 'Waist', value: 8, unit: 'cm' },
    { id: 5, measurement: 'Shoulder', value: 9, unit: 'cm' },
    { id: 6, measurement: 'Sleeve', value: 87, unit: 'cm' },
    { id: 7, measurement: 'Arm', value: 77, unit: 'cm' }
  ]
};

const MeasurementDetails = () => {
  const [editIdx, setEditIdx] = useState('');
  const [measurements, setMeasurements] = useState(MEASUREMENTS);
  const { register, handleSubmit, unregister } = useForm();

  const params = useParams();
  console.log("Customer ID ====>", params.id);
  const dressTypes = [
    { 'id': 1, 'name': 'Formal' },
    { 'id': 2, 'name': 'Casual' },
    { 'id': 3, 'name': 'Party Wear' },
  ];

  const handleCrud = (rowIdx, action) => {
    setEditIdx(rowIdx);
    if (action === 'edit') {
      unregisterFormElements();
    }
    if (action === 'save') {
      handleSubmit(onSubmit)();
    }
  };

  const unregisterFormElements = () => {
    unregister('measurement');
    unregister('value');
    unregister('unit');
  };

  const onSubmit = (data) => {
    const [dressName, idx] = editIdx.split('_');
    setMeasurements((prevMeasurements) => {
      const prevObj = { ...prevMeasurements[dressName][idx] };
      prevObj['measurement'] = data['measurement'];
      prevObj['value'] = data['value'];
      prevObj['unit'] = data['unit'];
      const clone = { ...prevMeasurements };
      const cloneMeasurement = [...prevMeasurements[dressName]];
      cloneMeasurement[idx] = prevObj;
      clone[dressName] = cloneMeasurement;
      unregisterFormElements();
      return clone;
    });
  };

  return (
    <section className='measurement-details-container'>
      <div className="container mt-5">
        <h1 className="heading animated-heading">MEASUREMENT DETAILS</h1>

        <div className="table-container mx-auto">
          <div className='row'>
            <div className='col-md-6 text-start fs-7 fw-bolder'>
              <p className='cusdet'>NAME: Customer 1</p>
            </div>
            <div className='col-md-6 text-end fs-7 fw-bolder'>
              <p className='cusdet'>CUS ID: 100</p>
            </div>
          </div>
          <div className="accordion" id="accordionExample">
            {dressTypes.map((dress, dressIdx) => (
              <div className="accordion-item" key={dress.id}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#collapse_" + dress.id}
                  >
                    {dress.name}
                  </button>
                </h2>
                <div
                  id={"collapse_" + dress.id}
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th scope="col">S.No</th>
                          <th scope="col">Measurement</th>
                          <th scope="col">Value</th>
                          <th scope="col">Unit</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {measurements[dress.name].map((item, index) => (
                          <tr key={dress.name + '_' + index}>
                            <td>{index + 1}</td>
                            <td>
                              {editIdx !== `${dress.name}_${index}` && <span>{item.measurement}</span>}
                              {editIdx === `${dress.name}_${index}` && (
                                <span>
                                  <input
                                    type="text"
                                    className="form-control"
                                    {...register("measurement", { value: item.measurement })}
                                  />
                                </span>
                              )}
                            </td>
                            <td>
                              {editIdx !== `${dress.name}_${index}` && <span>{item.value}</span>}
                              {editIdx === `${dress.name}_${index}` && (
                                <span>
                                  <input
                                    type="text"
                                    className="form-control"
                                    {...register("value", { value: item.value })}
                                  />
                                </span>
                              )}
                            </td>
                            <td>
                              {editIdx !== `${dress.name}_${index}` && <span>{item.unit}</span>}
                              {editIdx === `${dress.name}_${index}` && (
                                <span>
                                  <input
                                    type="text"
                                    className="form-control"
                                    {...register("unit", { value: item.unit })}
                                  />
                                </span>
                              )}
                            </td>
                            <td>
                              <div className="action-icons">
                                {editIdx === `${dress.name}_${index}` ? (
                                  <>
                                    <a>
                                      <img src={Save} onClick={() => handleCrud('', 'save')} />
                                    </a>
                                    <a>
                                      <img src={Cancel} onClick={() => handleCrud('')} />
                                    </a>
                                  </>
                                ) : (
                                  <>
                                    <a>
                                      <img src={Edit} onClick={() => handleCrud(`${dress.name}_${index}`, 'edit')} />
                                    </a>
                                    <a>
                                      <img src={Trash} />
                                    </a>
                                  </>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeasurementDetails;
