import moment from "moment";
import { ICard, ILog, IPosition, IStudent } from "../interfaces";
import { IProperty } from "../interfaces/property.interface";
import { UploadProps } from "antd";
import { NotificationInstance } from "antd/es/notification/interface";

export const convertStudents = (students: IStudent[]) => {
  return students.map((sv) => {
    return {
      MaSV: sv.id,
      TenSV: sv.name,
      Lop: sv.lop?.name ?? "",
      Email: sv.email,
    };
  });
};

export const convertStudentPoints = (students: IStudent[]) => {
  return students
    .filter((sv) => sv.lng && sv.lat)
    .map((sv) => {
      console.log([sv.lng, sv.lat]);

      return {
        MaSV: sv.id,
        ToaDo: [sv.lng, sv.lat],
      };
    });
};

export const convertCards = (cards: ICard[]) => {
  return cards.map((card) => {
    return {
      MaThe: card.id,
      MaSV: card.studentId,
      NgayCap: moment(card.createdAt).format("HH:mm DD/MM/YYYY (ddd)"),
      NgayHetHan: moment(card.expiredAt).format("HH:mm DD/MM/YYYY (ddd)"),
    };
  });
};

export const convertLogs = (logs: ILog[]) => {
  return logs.map((log) => {
    return {
      MaGD: log.id,
      MaThe: log.cardId,
      MaViTri: log.positionId,
      ThoiGian: moment(log.time).format("HH:mm DD/MM/YYYY (ddd)"),
    };
  });
};

const colorArray = [
  [0, 255, 0],
  [0, 0, 255],
  [255, 255, 0],
  [255, 0, 255],
  [0, 255, 255],
  [255, 165, 0],
  [0, 127, 255],
  [0, 0, 255],
  [0, 127, 255],
  [0, 127, 255],
  [0, 127, 255],
];

export const convertPositionsToArea = (positions: IPosition[]) => {
  return positions
    .filter((pos) => pos.type === "area")
    .map((pos, idx) => {
      return {
        MaViTri: pos.id,
        TenViTri: pos.name,
        Color: colorArray[idx % colorArray.length],
        ToaDo: pos.lngs.map((lng, idx) => [lng, pos.lats[idx]]),
      };
    });
};

export const convertPositionsToRoute = (positions: IPosition[]) => {
  return positions
    .filter((pos) => pos.type === "route")
    .map((pos, idx) => {
      return {
        TenDuong: pos.name,
        ToaDo: pos.lngs.map((lng, idx) => [lng, pos.lats[idx]]),
      };
    });
};

export const convertProperties = (props: IProperty[]) => {
  return props.map((prop) => {
    return {
      MaTB: prop.id,
      MaViTri: prop.positionId,
      TenTB: prop.name,
    };
  });
};

export const getUploadProps = (
  type: string,
  notificationApi: NotificationInstance,
) => {
  const uploadProps: UploadProps = {
    name: "file",
    action: `${process.env.REACT_APP_API_URL}/csv/upload/${type}`,
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "error") {
        notificationApi.error({
          message: "Lỗi",
          description: "Tải lên thất bại",
        });
      }
    },
  };

  return uploadProps;
};
