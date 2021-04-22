import React from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import CIcon from "@coreui/icons-react";

import toursData from "./UsersData";
import { Formik } from "formik";

const Tour = ({ match }) => {
  const tour = toursData.find((tour) => tour.id.toString() === match.params.id);
  const userDetails = tour
    ? Object.entries(tour)
    : [
        [
          "id",
          <span>
            <CIcon className="text-muted" name="cui-icon-ban" /> Not found
          </span>,
        ],
      ];

  return (
    <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>Tour id: {match.params.id}</CCardHeader>
          <CCardBody>
            <Formik>
              <table className="table table-striped table-hover">
                <tbody>
                  {userDetails.map(([key, value], index) => {
                    return (
                      <tr key={index.toString()}>
                        <td>{`${key}:`}</td>
                        <td>
                          <input value={value} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Formik>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Tour;
