/* eslint-disable @next/next/no-img-element */
"use client";
import React, { memo } from "react";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import Select from "../select/page";

const Modal = ({ show, modalInfo, setModalInfo, modal, setModal }: any) => {
  const [subtitle, setSubtitle] = useState<boolean>(false);
  const [forms, setForms] = useState<boolean>(false);

  return (
    <section
      className={`${show} fixed w-full h-screen top-0 left-0 flex items-center justify-center`}
      style={{
        background: "rgba(17, 17, 17, 0.6)",
        backdropFilter: "blur(2px)",
        zIndex: 2,
        transition: "all 0.3s ease-in-out",
      }}
    >
      <div
        className="modal w-8/12 m-auto py-14 px-16"
        style={{
          minHeight: "500px",
          background:
            "linear-gradient(90deg, #EEEEEE 0%, rgba(247, 247, 247, 0.8) 100%)",
          boxShadow: "40px 40px 64px -32px rgba(15, 15, 15, 0.1)",
          backdropFilter: "blur(16px)",
          borderRadius: "48px",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <div className="modal_title flex justify-between items-center pb-5">
          <h1 className="text-3xl font-semibold" style={{ color: "#141414" }}>
            {forms ? modalInfo?.serviceTitle : modalInfo?.modalTitle}
          </h1>
          <button
            className="text-black"
            onClick={() => {
              setModal(false);
              setForms(false);
              setSubtitle(false);
            }}
          >
            X
          </button>
        </div>
        {subtitle && (
          <p style={{ color: "#141414" }} className="pb-7">
            Məlumatları əlavə edin
          </p>
        )}
        {forms ? (
          <div className="modal_services flex flex-wrap gap-6 mx-auto items-center">
            <form action="" className="flex flex-col">
              {modalInfo?.services.map(
                (service: any) =>
                  modalInfo?.serviceTitle === service.title &&
                  service?.fields.map((field: any, i: number) => (
                    <div
                      className="mb-4"
                      key={`${service.title}-${field.title}-${i}`}
                    >
                      <h6
                        className="pb-2 text-3sm"
                        style={{ color: "#33383F" }}
                      >
                        {field.title}
                      </h6>
                      {field.isInput ? (
                        <input
                          type="text"
                          className="p-3 w-full outline-none rounded-lg"
                          style={{ color: "#33383F" }}
                        />
                      ) : (
                        <select
                          className="rounded-lg p-3 w-full outline-none"
                          style={{ color: "#33383F" }}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      )}
                    </div>
                  ))
              )}
              <div className="buttons flex pt-11">
                <button
                  className="py-2 px-14 text-sm rounded-lg mr-6"
                  style={{
                    color: "#28303F",
                    background: "#FFFFFF",
                    border: "1px solid #28303F",
                  }}
                  onClick={() => {
                    setForms(false);
                    setSubtitle(false);
                    setModalInfo({
                      ...modalInfo,
                      modalTitle: modalInfo?.modalTitle,
                    });
                  }}
                >
                  Geriyə
                </button>
                <button
                  className="py-2 px-14 text-sm rounded-lg"
                  style={{
                    color: "#fff",
                    background: "#28303F",
                    border: "1px solid #28303F",
                  }}
                >
                  Davam et
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="modal_services flex flex-wrap gap-6 mx-auto items-center">
            {modalInfo?.services.map((service: any, i: number) => (
              <Link
                key={i}
                href={service}
                className="w-1/6 modal_service px-9 pt-6 pb-3 flex flex-col items-center justify-center"
                style={{
                  border: "2px solid #E7E7E7",
                  background: "#FFFFFF",
                  height: 136,
                  borderRadius: 36,
                }}
                onClick={() => {
                  setModalInfo({
                    ...modalInfo,
                    serviceTitle: service.title,
                  });
                  setSubtitle(true);
                  setForms(true);
                }}
              >
                <img
                  src={service.img}
                  alt=""
                  style={{ height: "30px", objectFit: "contain" }}
                />
                <h6 className="pt-5 text-sm" style={{ color: "#616161" }}>
                  {service.title}
                </h6>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(Modal);
