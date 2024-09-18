import React from 'react';
import './MeasurementEntry.css';

const MeasurementEntry = () => {
  return (
    <section className='measurement-entry-container'>
      <div className="container mt-3">
        <div><h1 className="text-center mb-1 heading animated-heading">MEASUREMENT ENTRY FORM</h1></div>
        <form className='form-adjust animated-form'>
          {/* Top Row for Dress Type and Measurement Unit */}
          <div className="row mb-3">
            <div className="col-md-6 fw-bold size animated-input">
              <label htmlFor="dressType">Type of Dress</label>
              <select className="form-control" id="dressType" name="dressType">
                <option value="formal">Formal</option>
                <option value="casual">Casual</option>
                <option value="partyWear">Party Wear</option>
              </select>
            </div>

            <div className="col-md-6 fw-bold size animated-input">
              <label htmlFor="measurementUnit">Measurement Unit</label>
              <select className="form-control" id="measurementUnit" name="measurementUnit">
                <option value="cm">cm</option>
                <option value="inch">inch</option>
              </select>
            </div>
          </div>

          {/* Measurement fields - Hip, Neck, Chest, Waist */}
          <div className="row mb-3">
            <div className="col-md-3 fw-bold animated-input">
              <label htmlFor="hip">Hip</label>
              <input type="number" className="form-control" id="hip" name="hip" required />
            </div>
            <div className="col-md-3 fw-bold animated-input">
              <label htmlFor="neck">Neck</label>
              <input type="number" className="form-control" id="neck" name="neck" required />
            </div>
            <div className="col-md-3 fw-bold animated-input">
              <label htmlFor="chest">Chest</label>
              <input type="number" className="form-control" id="chest" name="chest" required />
            </div>
            <div className="col-md-3 fw-bold animated-input">
              <label htmlFor="waist">Waist</label>
              <input type="number" className="form-control" id="waist" name="waist" required />
            </div>
          </div>

          {/* Measurement fields - Shoulder, Sleeve, Arm, Rise */}
          <div className="row mb-3">
            <div className="col-md-3 fw-bold animated-input">
              <label htmlFor="shoulder">Shoulder</label>
              <input type="number" className="form-control" id="shoulder" name="shoulder" required />
            </div>
            <div className="col-md-3 fw-bold animated-input">
              <label htmlFor="sleeve">Sleeve</label>
              <input type="number" className="form-control" id="sleeve" name="sleeve" required />
            </div>
            <div className="col-md-3 fw-bold animated-input">
              <label htmlFor="arm">Arm</label>
              <input type="number" className="form-control" id="arm" name="arm" required />
            </div>
            <div className="col-md-3 fw-bold animated-input">
              <label htmlFor="rise">Rise</label>
              <input type="number" className="form-control" id="rise" name="rise" required />
            </div>
          </div>

          {/* Submit Button */}
          <div className="row mt-3">
            <div className="col text-center">
              <button type="submit" className="btn btn-primary animated-button">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default MeasurementEntry;
