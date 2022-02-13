using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    public partial class allcop : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Corporations_Customers_CustomerId",
                table: "Corporations");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Corporations",
                table: "Corporations");

            migrationBuilder.RenameTable(
                name: "Corporations",
                newName: "CorporateCustomers");

            migrationBuilder.RenameIndex(
                name: "IX_Corporations_CustomerId",
                table: "CorporateCustomers",
                newName: "IX_CorporateCustomers_CustomerId");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedDate",
                table: "Invoices",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2022, 2, 10, 20, 2, 59, 102, DateTimeKind.Local).AddTicks(3474),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2022, 2, 10, 20, 2, 3, 474, DateTimeKind.Local).AddTicks(419));

            migrationBuilder.AddPrimaryKey(
                name: "PK_CorporateCustomers",
                table: "CorporateCustomers",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_CorporateCustomers_Customers_CustomerId",
                table: "CorporateCustomers",
                column: "CustomerId",
                principalTable: "Customers",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CorporateCustomers_Customers_CustomerId",
                table: "CorporateCustomers");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CorporateCustomers",
                table: "CorporateCustomers");

            migrationBuilder.RenameTable(
                name: "CorporateCustomers",
                newName: "Corporations");

            migrationBuilder.RenameIndex(
                name: "IX_CorporateCustomers_CustomerId",
                table: "Corporations",
                newName: "IX_Corporations_CustomerId");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedDate",
                table: "Invoices",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2022, 2, 10, 20, 2, 3, 474, DateTimeKind.Local).AddTicks(419),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2022, 2, 10, 20, 2, 59, 102, DateTimeKind.Local).AddTicks(3474));

            migrationBuilder.AddPrimaryKey(
                name: "PK_Corporations",
                table: "Corporations",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Corporations_Customers_CustomerId",
                table: "Corporations",
                column: "CustomerId",
                principalTable: "Customers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
