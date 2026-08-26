/**
 * Generic Model Registry for Offline Synchronization.
 * Defines API mappings, endpoints, serializer functions, and Dexie stores.
 */

export const MODEL_REGISTRY = {
  registrations: {
    name: "registrations",
    storeName: "registrations",
    endpoint: "/api/registrations",
    primaryKey: "id",
    apiEndpoints: {
      post: "/api/registrations",
      put: (item) => `/api/registrations/${item.id}`,
      get: "/api/registrations?limit=100",
    },
    serializePost: (item) => {
      const payload = {
        billOn: item.billOn || "Patient Rate",
        mobileNo: item.mobileNo || "",
        title: item.title || "Mr.",
        name: item.name || "",
        city: item.city || "-NA-",
        age: parseFloat(item.age) || 0,
        ageUnit: item.ageUnit || "Year",
        gender: item.gender || "Male",
        refById: item.refById ? parseInt(item.refById) : null,
        secondRefById: item.secondRefId ? parseInt(item.secondRefId) : null,
        remark: item.remark || null,
        colType: item.colType || "Camp",
        expRptDate: item.expRptDate || null,
        sampleDate: item.sampleDate || null,
        sampleNo: item.sampleNo || null,
        sampleBy: item.sampleBy || "-NA-",
        paymentMode: item.paymentMode || "Cash",
        paymentRefNo: item.paymentRefNo || null,
        totalAmount: parseFloat(item.totalAmount) || 0,
        collectionCharge: parseFloat(item.collectionCharge) || 0,
        discountPercent: parseFloat(item.discountPercent) || 0,
        discountAmount: parseFloat(item.discountAmount) || 0,
        receivedAmount: parseFloat(item.receivedAmount) || 0,
        dueAmount: parseFloat(item.dueAmount) || 0,
        stickerCount: parseInt(item.stickerCount) || 1,
        testIds: item.testIds || (item.tests ? item.tests.map(t => t.testId || t.id || t) : []),
        tests: item.tests || [],
      };
      return payload;
    },
    serializePut: (item) => {
      return {
        ...item,
      };
    },
    extractServerRecords: (data) => data.registrations || (Array.isArray(data) ? data : []),
    extractCreatedRecord: (data) => data.registration || data,
  },

  patientResults: {
    name: "patientResults",
    storeName: "patientResults",
    primaryKey: "id",
    apiEndpoints: {
      post: (item) => `/api/registrations/${item.registrationId}/results`,
      put: (item) => `/api/registrations/${item.registrationId}/results`,
    },
    serializeBatch: (records) => {
      // Group results by registrationId
      const groups = {};
      records.forEach((r) => {
        if (!groups[r.registrationId]) {
          groups[r.registrationId] = {
            registrationId: r.registrationId,
            resultsData: [],
            reportNotes: r.reportNotes || "",
            status: r.status || "Completed",
          };
        }
        groups[r.registrationId].resultsData.push({
          testParameterId: parseInt(r.testParameterId),
          value: r.value !== undefined && r.value !== null ? String(r.value) : "",
        });
      });
      return Object.values(groups);
    },
  },

  doctors: {
    name: "doctors",
    storeName: "doctors",
    endpoint: "/api/doctors",
    primaryKey: "id",
    apiEndpoints: {
      post: "/api/doctors",
      put: (item) => "/api/doctors",
      get: "/api/doctors",
    },
    serializePost: (item) => ({
      name: item.name,
      code: item.code || null,
      degree: item.degree || null,
      address: item.address || null,
      clinicName: item.clinicName || null,
      incentivePercent: item.incentivePercent !== undefined ? parseFloat(item.incentivePercent) : 0,
    }),
    serializePut: (item) => ({
      doctorId: item.id,
      name: item.name,
      code: item.code || null,
      degree: item.degree || null,
      address: item.address || null,
      clinicName: item.clinicName || null,
      incentivePercent: item.incentivePercent !== undefined ? parseFloat(item.incentivePercent) : 0,
    }),
    extractServerRecords: (data) => data.doctors || (Array.isArray(data) ? data : []),
    extractCreatedRecord: (data) => data.doctor || data,
  },

  tests: {
    name: "tests",
    storeName: "tests",
    endpoint: "/api/tests",
    primaryKey: "id",
    apiEndpoints: {
      post: "/api/tests",
      put: (item) => `/api/tests`,
      get: "/api/tests",
    },
    serializePost: (item) => item,
    serializePut: (item) => item,
    extractServerRecords: (data) => data.tests || (Array.isArray(data) ? data : []),
    extractCreatedRecord: (data) => data.test || data,
  },

  workspacePdf: {
    name: "workspacePdf",
    storeName: "workspacePdf",
    endpoint: "/api/settings/pdf",
    primaryKey: "id",
    apiEndpoints: {
      post: "/api/settings/pdf",
      put: (item) => "/api/settings/pdf",
      get: "/api/settings/pdf",
    },
    serializePost: (item) => item,
    serializePut: (item) => item,
    extractServerRecords: (data) => (data.pdfSetting ? [data.pdfSetting] : []),
    extractCreatedRecord: (data) => data.pdfSetting || data,
  }
};
