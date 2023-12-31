import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar } from 'reactstrap';
import { Field, Form } from 'react-final-form';
import PercentOutlineIcon from 'mdi-react/PercentOutlineIcon';
import renderDropZoneMultipleField from '../../../../shared/components/form/DropZoneMultiple';
import renderSelectField from '../../../../shared/components/form/Select';

const CouponEditForm = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit, form }) => (
      <form className="form coupon-edit" onSubmit={handleSubmit}>
          <div className="form__half"> 
          <div className="form__form-group">
            <span className="form__form-group-label">Coupon Name</span>
            <div className="form__form-group-field">
              <Field
                name="couponname"
                component="input"
                type="text"
              />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Full description</span>
            <div className="form__form-group-field">
              <Field
                name="full_description"
                component="textarea"
                type="text"
              />
            </div>
          </div>
          <div className="card__title">
            <h5 className="bold-text">Pricing</h5>
          </div>
          <div className="form__form-group-price-discount">
            <div className="form__form-group form__form-group-price">
              <span className="form__form-group-label">Discount</span>
              <div className="form__form-group-field">
                <div className="form__form-group-icon">
                  <PercentOutlineIcon />
                </div>
                <Field
                  name="discount"
                  component="input"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="card__title">
            <h5 className="bold-text">General information</h5>
          </div>
          <div className="form form--horizontal">
            <div className="form__form-group">
              <span className="form__form-group-label">Restaurant</span>
              <div className="form__form-group-field">
                <Field
                  name="restaurant"
                  component={renderSelectField}
                  options={[
                    { value: 'one', label: 'Top Restaurant and Bar' },
                    { value: 'two', label: 'Neptune’s Coffee Shop' },
                  ]}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Products</span>
              <div className="form__form-group-field">
                <Field
                  name="products"
                  component={renderSelectField}
                  options={[
                    { value: 'one', label: 'Quesadilla' },
                    { value: 'two', label: 'Pizza' },
                    { value: 'three', label: 'Beef Stir Fry' },
                    { value: 'four', label: 'Vegetarian Stir Fry' },
                  ]}
                />
              </div>
            </div>
            <ButtonToolbar className="form__button-toolbar">
              <Button color="primary" type="submit">Save</Button>
              <Button type="button" onClick={form.reset}>Cancel</Button>
              <Button type="button" onClick={form.reset}>Delete</Button>
            </ButtonToolbar>
          </div>
        </div>        
      </form>
    )}
  </Form>
);

CouponEditForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CouponEditForm;
