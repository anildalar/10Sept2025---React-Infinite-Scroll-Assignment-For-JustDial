// fakeData.js
import fetch from "node-fetch"; // npm install node-fetch@2
import { faker } from "@faker-js/faker"; // npm install @faker-js/faker

const API_URL = "http://localhost:1337/api/businesses";
const TOTAL = 10000;
const BATCH_SIZE = 100; // insert in batches to avoid overload

async function createBusiness(business) {
    try {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ data: business }),
        });

        if (!res.ok) {
            const error = await res.text();
            console.error("Error:", error);
        } else {
            const json = await res.json();
            return json;
        }
    } catch (err) {
        console.error("Request failed:", err.message);
    }
}

function generateBusiness() {
    return {
        name: faker.company.name()
    };
}

async function run() {
    console.log(`Starting insert of ${TOTAL} businesses in batches of ${BATCH_SIZE}...`);

    for (let i = 0; i < TOTAL; i += BATCH_SIZE) {
        const batch = Array.from({ length: BATCH_SIZE }, generateBusiness);
        await Promise.all(batch.map((biz) => createBusiness(biz)));

        console.log(`Inserted ${i + BATCH_SIZE > TOTAL ? TOTAL : i + BATCH_SIZE}/${TOTAL}`);
    }

    console.log("Done inserting businesses!");
}

run();
