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
      get: "/api/registrations?limit=500",
    },
    serializePost: (item) => {
      const testIds = Array.isArray(item.testIds) && item.testIds.length > 0
        ? item.testIds.map(Number)
        : (item.tests ? item.tests.map(t => Number(t.testId || t.test?.id || t.id || t)).filter(Boolean) : []);

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
        secondRefById: item.secondRefById || item.secondRefId ? parseInt(item.secondRefById || item.secondRefId) : null,
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
        regNo: item.regNo || null,
        labId: item.labId || null,
        pdfOtp: item.pdfOtp || null,
        barcode: item.barcode || null,
        date: item.date || null,
        status: item.status || (parseFloat(item.dueAmount) > 0 ? "Pending" : "Completed"),
        workspaceId: item.workspaceId ? Number(item.workspaceId) : null,
        testIds: testIds.length > 0 ? testIds : [1],
        tests: (item.tests || []).map(t => ({
          testId: Number(t.testId || t.test?.id || t.id || t),
          price: parseFloat(t.price) || 0,
          expense: parseFloat(t.expense) || 0,
          sampleStatus: t.sampleStatus || "Pending",
          sampleBarcode: t.sampleBarcode || null,
          collectedBy: t.collectedBy || "-NA-",
          pathologist: t.pathologist || "-NA-",
          sendTo: t.sendTo || "-NA-",
          interpretation: t.interpretation || null,
        })),
      };
      return payload;
    },
    serializePut: (item) => {
      const testIds = Array.isArray(item.testIds) && item.testIds.length > 0
        ? item.testIds.map(Number)
        : (item.tests ? item.tests.map(t => Number(t.testId || t.test?.id || t.id || t)).filter(Boolean) : []);

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
        secondRefById: item.secondRefById || item.secondRefId ? parseInt(item.secondRefById || item.secondRefId) : null,
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
        regNo: item.regNo || null,
        labId: item.labId || null,
        pdfOtp: item.pdfOtp || null,
        barcode: item.barcode || null,
        date: item.date || null,
        status: item.status || (parseFloat(item.dueAmount) > 0 ? "Pending" : "Completed"),
        workspaceId: item.workspaceId ? Number(item.workspaceId) : null,
        testIds: testIds.length > 0 ? testIds : [1],
        tests: (item.tests || []).map(t => ({
          testId: Number(t.testId || t.test?.id || t.id || t),
          price: parseFloat(t.price) || 0,
          expense: parseFloat(t.expense) || 0,
          sampleStatus: t.sampleStatus || "Pending",
          sampleBarcode: t.sampleBarcode || null,
          collectedBy: t.collectedBy || "-NA-",
          pathologist: t.pathologist || "-NA-",
          sendTo: t.sendTo || "-NA-",
          interpretation: t.interpretation || null,
        })),
      };
      return payload;
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

  parameters: {
    name: "parameters",
    storeName: "parameters",
    endpoint: "/api/tests",
    primaryKey: "id",
    apiEndpoints: {
      get: "/api/tests",
    },
    extractServerRecords: (data) => {
      const tests = data.tests || (Array.isArray(data) ? data : []);
      const paramMap = new Map();
      tests.forEach((t) => {
        (t.parameters || []).forEach((tp) => {
          const p = tp.parameter || tp;
          if (p && p.id && !paramMap.has(p.id)) {
            paramMap.set(p.id, {
              ...p,
              id: tp.parameterId || p.id,
              name: p.name || tp.name,
              unit: tp.unit !== undefined && tp.unit !== null ? tp.unit : (p.unit || ""),
              valueType: tp.valueType || p.valueType || "NUMERIC",
              options: tp.options || p.options || null,
              minValMale: p.minValMale,
              maxValMale: p.maxValMale,
              normalRangeMale: p.normalRangeMale,
              minValFemale: p.minValFemale,
              maxValFemale: p.maxValFemale,
              normalRangeFemale: p.normalRangeFemale,
              minValBaby: p.minValBaby,
              maxValBaby: p.maxValBaby,
              normalRangeBaby: p.normalRangeBaby,
              normalRangeDefault: p.normalRangeDefault,
            });
          }
        });
      });
      return Array.from(paramMap.values());
    },
  },

  testParameters: {
    name: "testParameters",
    storeName: "testParameters",
    endpoint: "/api/tests",
    primaryKey: "id",
    apiEndpoints: {
      get: "/api/tests",
    },
    extractServerRecords: (data) => {
      const tests = data.tests || (Array.isArray(data) ? data : []);
      const list = [];
      tests.forEach((t) => {
        (t.parameters || []).forEach((tp) => {
          list.push({
            ...tp,
            testId: t.id,
            parameterId: tp.parameterId || (tp.parameter ? tp.parameter.id : tp.id),
          });
        });
      });
      return list;
    },
  },

  testDepartments: {
    name: "testDepartments",
    storeName: "testDepartments",
    endpoint: "/api/tests",
    primaryKey: "id",
    apiEndpoints: {
      get: "/api/tests",
    },
    extractServerRecords: (data) => {
      const tests = data.tests || (Array.isArray(data) ? data : []);
      const deptMap = new Map();
      tests.forEach((t) => {
        if (t.department && t.department.id && !deptMap.has(t.department.id)) {
          deptMap.set(t.department.id, t.department);
        }
      });
      return Array.from(deptMap.values());
    },
  },

  testFormulas: {
    name: "testFormulas",
    storeName: "testFormulas",
    endpoint: "/api/tests",
    primaryKey: "id",
    apiEndpoints: {
      get: "/api/tests",
    },
    extractServerRecords: (data) => {
      const tests = data.tests || (Array.isArray(data) ? data : []);
      const list = [];
      tests.forEach((t) => {
        (t.formulas || []).forEach((f) => {
          list.push({
            ...f,
            testId: t.id,
          });
        });
      });
      return list;
    },
  },

  interpretationRules: {
    name: "interpretationRules",
    storeName: "interpretationRules",
    endpoint: "/api/tests",
    primaryKey: "id",
    apiEndpoints: {
      get: "/api/tests",
    },
    extractServerRecords: (data) => {
      const tests = data.tests || (Array.isArray(data) ? data : []);
      const list = [];
      tests.forEach((t) => {
        (t.interpretationRules || []).forEach((r) => {
          list.push({
            ...r,
            testId: t.id,
          });
        });
      });
      return list;
    },
  },

  registrationPayments: {
    name: "registrationPayments",
    storeName: "registrationPayments",
    endpoint: "/api/registrations",
    primaryKey: "id",
    apiEndpoints: {
      post: (item) => `/api/registrations/${item.registrationId}/payment`,
      get: "/api/registrations?limit=500",
    },
    serializePost: (item) => ({
      received: parseFloat(item.amount || 0),
      paymentMode: item.mode || item.paymentMode || "Cash",
      paymentRefNo: item.refNo || item.paymentRefNo || null,
      remark: item.remark || "Chunk Payment",
    }),
    extractCreatedRecord: (data) => data.registration || data,
    extractServerRecords: (data) => {
      const registrations = data.registrations || (Array.isArray(data) ? data : []);
      const list = [];
      registrations.forEach((reg) => {
        (reg.payments || []).forEach((pm) => {
          list.push({
            ...pm,
            registrationId: reg.id,
          });
        });
      });
      return list;
    },
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
    extractServerRecords: (data) => {
      const rec = data.pdfSetting || data.pdfConfig || data.settings;
      if (!rec) return [];
      let framePdfBytes = rec.framePdfBytes || null;
      if (rec.framePdfBase64) {
        try {
          const binaryString = atob(rec.framePdfBase64);
          const len = binaryString.length;
          const bytes = new Uint8Array(len);
          for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
          }
          framePdfBytes = bytes;
        } catch (e) {}
      }
      return [{ ...rec, framePdfBytes }];
    },
    extractCreatedRecord: (data) => {
      const rec = data.pdfSetting || data.pdfConfig || data.settings || data;
      if (!rec) return rec;
      let framePdfBytes = rec.framePdfBytes || null;
      if (rec.framePdfBase64) {
        try {
          const binaryString = atob(rec.framePdfBase64);
          const len = binaryString.length;
          const bytes = new Uint8Array(len);
          for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
          }
          framePdfBytes = bytes;
        } catch (e) {}
      }
      return { ...rec, framePdfBytes };
    },
  },

  admins: {
    name: "admins",
    storeName: "admins",
    endpoint: "/api/profile",
    primaryKey: "id",
    apiEndpoints: {
      post: "/api/members",
      put: (item) => "/api/profile",
      get: "/api/members",
    },
    serializePost: (item) => item,
    serializePut: (item) => ({
      name: item.name,
      companyName: item.companyName,
      mobileNumber: item.mobileNumber,
      address: item.address,
    }),
    extractServerRecords: (data) => data.members || (data.admin ? [data.admin] : []),
    extractCreatedRecord: (data) => data.member || data.admin || data,
  },
};
