import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import ResponsiveTable from './components/ResponsiveTable';

const BasicTables = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('Restuarants')}</h3>
        </Col>
      </Row>
      <Row>
        <ResponsiveTable />
      </Row>
    </Container>
  );
};

export default BasicTables;