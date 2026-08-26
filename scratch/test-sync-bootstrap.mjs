import { prisma } from "../lib/db.js";

async function verifyBackendEndpoints() {
  console.log("Verifying Database & Models...");

  const [testsCount, paramsCount, testParamsCount, deptsCount, formulasCount, rulesCount, docsCount, regsCount] = await Promise.all([
    prisma.test.count({ where: { isDeleted: false } }),
    prisma.parameter.count(),
    prisma.testParameter.count({ where: { isDeleted: false } }),
    prisma.testDepartment.count(),
    prisma.testFormula.count({ where: { isActive: true } }),
    prisma.interpretationRule.count(),
    prisma.doctor.count({ where: { isDeleted: false } }),
    prisma.registration.count({ where: { isDeleted: false } }),
  ]);

  console.log("Counts in MySQL database:");
  console.log(`- Tests: ${testsCount}`);
  console.log(`- Parameters: ${paramsCount}`);
  console.log(`- TestParameters: ${testParamsCount}`);
  console.log(`- Departments: ${deptsCount}`);
  console.log(`- Formulas: ${formulasCount}`);
  console.log(`- Interpretation Rules: ${rulesCount}`);
  console.log(`- Doctors: ${docsCount}`);
  console.log(`- Registrations: ${regsCount}`);

  // Fetch a sample test with all relations
  const sampleTest = await prisma.test.findFirst({
    where: { isDeleted: false },
    include: {
      department: true,
      parameters: {
        where: { isDeleted: false },
        orderBy: { order: "asc" },
        include: { parameter: true }
      },
      formulas: { where: { isActive: true } },
      interpretationRules: true,
    }
  });

  if (sampleTest) {
    console.log("\nSample Test relational structure:");
    console.log(`- Name: ${sampleTest.name}`);
    console.log(`- Department: ${sampleTest.department?.name || "None"}`);
    console.log(`- Parameters count: ${sampleTest.parameters?.length || 0}`);
    console.log(`- Formulas count: ${sampleTest.formulas?.length || 0}`);
    console.log(`- Rules count: ${sampleTest.interpretationRules?.length || 0}`);
    if (sampleTest.parameters?.[0]) {
      const tp = sampleTest.parameters[0];
      console.log(`- First param: ${tp.parameter?.name || "N/A"}, unit: ${tp.unit || tp.parameter?.unit || "N/A"}`);
    }
  }

  // Fetch a sample registration with all relations
  const sampleReg = await prisma.registration.findFirst({
    where: { isDeleted: false },
    include: {
      refBy: true,
      tests: { include: { test: true } },
      results: true,
      payments: true,
    }
  });

  if (sampleReg) {
    console.log("\nSample Registration relational structure:");
    console.log(`- Reg No: ${sampleReg.regNo}`);
    console.log(`- Patient Name: ${sampleReg.name}`);
    console.log(`- Tests count: ${sampleReg.tests?.length || 0}`);
    console.log(`- Results count: ${sampleReg.results?.length || 0}`);
    console.log(`- Payments count: ${sampleReg.payments?.length || 0}`);
  }

  console.log("\nBackend verification successful!");
}

verifyBackendEndpoints()
  .catch((err) => {
    console.error("Verification failed:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
